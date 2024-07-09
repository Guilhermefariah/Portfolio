import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

interface ContactModalProps {
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       // Aqui você pode fazer uma requisição para enviar os dados para um backend
//       // Por exemplo, usando fetch, axios, etc.
//       // await fetch('/api/send-message', {
//       //   method: 'POST',
//       //   body: JSON.stringify(formData),
//       //   headers: {
//       //     'Content-Type': 'application/json'
//       //   }
//       // });
      
//       // Simulação de sucesso
//       setMessageSent(true);
//     } catch (error) {
//       console.error('Erro ao enviar mensagem:', error);
//     }
//   };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-100 rounded-lg p-8 w-96">
        <div className="flex justify-end">
          <button onClick={onClose}>
            <FaTimes className="text-gray-500 hover:text-gray-700 cursor-pointer" />
          </button>
        </div>
        <h2 className="text-2xl font-bold mb-4 text-center">Contact</h2>
        {!messageSent ? (
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 focus:outline-none rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 focus:outline-none rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Menssage
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="mt-1 block w-full border-gray-300 focus:outline-none rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-500 text-gray-200 py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        ) : (
          <div className="text-center">
            <p className="text-green-600 font-medium">Message sent successfully!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
