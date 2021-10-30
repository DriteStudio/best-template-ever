import type {NextPage} from 'next'

const Home: NextPage = () => {
  return (
    <div className="container py-12 mx-auto" style={{maxWidth: 900}}>
      <h1 className="text-3xl font-bold">Here</h1>
      <h3>Start using tailwind now</h3>
      <hr className="my-5" />
      <p className="mb-4">
        Start edit on <span className="badge">styles/globals.scss</span>
      </p>
      <div className="flex flex-wrap gap-2">
        <button className="btn ">Button</button>
        <button className="btn black">Button</button>
        <button className="btn outline">Button outline</button>
        <button className="btn outline black">Button outline</button>
        <a className="btn " href="#">
          Link button
        </a>
      </div>
    </div>
  )
}

export default Home
