import Image from "next/image";
import './page.css'
import logo from '@/public/images/logo.jpg'

export default function Home() {
  return (
    <section className="py-12">
      <div className="bg-white shadow-lg rounded-md text-slate-950">
        <div className="flex flex-col">
          <div className="px-8 py-12">
            <div className="flex justify-center flex-col sm:flex-row gap-6">
              <Image
                className="max-w-32 rounded-xl"
                src={logo}
                alt="House of Knowledge"
              />
              <h1 className="text-5xl font-bold self-center">
                House of Knowledge
              </h1>
            </div>
            <div className="py-8">
              <h2 className="text-xl font-semibold mb-4">
                Arabic Language Classes
              </h2>
              <form action="https://usebasin.com/f/74d9cc903ba0" method="POST">
                <p className="text-slate-600 mb-2">
                  Fill in form for initial call:
                </p>
                <input
                  type="text"
                  name="name"
                  placeholder="Full name"
                  className="input"
                />
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile number"
                  className="input"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className="input"
                />
                <button
                  type="submit"
                  className="px-6 py-4 bg-blue-800 text-white rounded-md cursor-pointer"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
