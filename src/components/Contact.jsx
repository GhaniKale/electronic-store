export default()=> (
<section id='contact' className='py-20 bg-gray-100' data-aos='fade-up'>
<h2 className='text-3xl font-bold text-center mb-6'>Contact</h2>
<form action='https://formsubmit.co/youremail@email.com' method='POST' className='max-w-xl mx-auto flex flex-col gap-4'>
<input name='name' placeholder='Name' className='border p-3'/>
<input name='email' placeholder='Email' className='border p-3'/>
<textarea name='message' placeholder='Message' className='border p-3'/>
<button className='bg-black text-white py-3'>Send</button>
</form>
</section>)