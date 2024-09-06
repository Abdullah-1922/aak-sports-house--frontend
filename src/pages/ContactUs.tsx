import toast from "react-hot-toast";

const ContactUs = () => {
    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
     e.preventDefault()
        toast.success('Message send successfully')
    }

  return (
    <div>
      <div className="flex flex-wrap justify-center items-center h-auto p-5 pl-[6%] pt-[9%]">
        <div className="w-full md:w-2/5 p-4">
          <h2 className="text-xl md:text-7xl font-semibold mb-5">
            Contact US!
          </h2>
          <form onSubmit={(e)=>handleSubmit(e)} className="space-y-4">
            <div>
              <input
                type="text"
        
                placeholder="Full Name"
                className="mt-1 p-4 w-full border rounded-md"
              />
            </div>
            <div>
              <input
             
        
                placeholder="Email"
                className="mt-1 p-4 w-full border rounded-md"
              />
            </div>
            <div>
              <textarea
             
                placeholder="Message"
                className="mt-1 p-4 w-full border rounded-md"
                rows={4}
              ></textarea>
            </div>
            <button
            type="submit"
              className="px-8 py-4 bg-black text-white hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="w-full md:w-1/2 p-4 flex justify-center">
          <div className="rounded-full overflow-hidden w-[35rem] h-[35rem]">
            <iframe
              className="w-[35rem] h-[35rem]"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14599.38919514664!2d90.39036265761939!3d23.82402846223025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1725232376072!5m2!1sen!2sbd"
              width="600"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
