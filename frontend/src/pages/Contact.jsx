
import { Button, Label, TextInput } from "flowbite-react";

export default function Contact() {
  return (
    <div className=" mt-12 ">
    <h1 className="text-3xl font-semibold mb-8 ml-12  text-lightText" >Get in Touch with us</h1>
    <div className="flex flex-col md:flex-row md:items-center justify-start p-3 max-w-3xl mx-auto gap-16">
      {/* Left Side */}
      <div className="flex-1">
        <p className="text-sm  font-serif font-semibold text-center text-whiteText tracking-wider">
          I would love to hear from you! Whether you have a question, a
          collaboration idea, or just want to connect, feel free to reach out.
          You can contact me via email at
        </p>
        <a href="mailto:Bedabrata.bagchi@gmail.com" className="block text-teal text-center mt-1 tracking-wide">Bedabrata.bagchi@gmail.com</a> 
      </div>
      {/* Right Side */}
      <div className="flex-1">
        <form className="flex flex-col gap-4 -mt-6">
          <p className="text-lg  font-serif font-semibold text-center text-teal">Write us a query</p>
          <div>
            <Label className="font-semibold ml-2 tracking-wider text-teal">Name</Label>
            <TextInput
              type="text"
              placeholder="Enter Your Name"
              id="Name"
              className="block w-full mt-1 rounded-md"
            />
          </div>
          <div>
            <Label className="font-semibold ml-2 text-teal tracking-wider">Email</Label>
            <TextInput
              type="email"
              placeholder="Enter Your Email"
              id="email"
              className="block w-full mt-1  rounded-md"
            />
          </div>
          <div>
            <Label className="font-semibold ml-2 text-teal tracking-wider">Message</Label>
            <textarea
              placeholder="Enter Your Message"
              id="Message"
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              rows="4"
            />
          </div>
          <Button
            type="submit"
            className="py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md hover:from-cyan-600 hover:to-blue-600"
          >
            Connect
          </Button>
        </form>
      </div>
    </div>
  </div>
  )
}



