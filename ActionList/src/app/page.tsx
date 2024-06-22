// Page.js
import Head from 'next/head';

export default function Page() {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col text-gray-200">
      <Head>
        <title>ActionList</title>
        <meta name="description" content="Convert your tasks to actions with ease." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-gray-800 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">ActionList</h1>
          <nav>
            <a href="#features" className="px-3 py-2 rounded hover:bg-gray-700">Features</a>
            <a href="#about" className="px-3 py-2 rounded hover:bg-gray-700">About</a>
            <a href="#contact" className="px-3 py-2 rounded hover:bg-gray-700">Contact</a>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-gray-800 text-center py-16">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-white">Convert your List to Actions</h2>
            <p className="text-gray-400 mb-8">Let's complete all the tasks on time</p>
            <a href="/custom" className="bg-green-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-green-500">Add Your Task</a>
          </div>
        </section>

        <section id="about" className="bg-gray-800 py-16">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6 text-white">About Us</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">Let's convert tasks to actions with no delays.</p>
          </div>
        </section>

        <section id="contact" className="bg-gray-900 py-16">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6 text-white">Contact Us</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">Have any questions or feedback?</p>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; ActionList</p>
      </footer>
    </div>
  );
}
