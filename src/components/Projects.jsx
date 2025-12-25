import data from '../data/projects'
export default()=> (
<section id='projects' className='py-20' data-aos='fade-up'>
<div className='max-w-6xl mx-auto'>
<h2 className='text-3xl font-bold text-center mb-8'>Projects</h2>
<div className='grid md:grid-cols-3 gap-6'>
{data.map((d,i)=>(
<div key={i} className='border p-6 shadow'>
<h3 className='font-bold'>{d.title}</h3>
<p>{d.desc}</p>
</div>
))}
</div>
</div>
</section>)