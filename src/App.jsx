import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
        
              <button className="btn btn-outline">Default</button>
          <button className="btn btn-outline btn-primary">Primary</button>
          <button className="btn btn-outline btn-secondary">Secondary</button>
          <button className="btn btn-outline btn-accent">Accent</button>
          <button className="btn btn-outline btn-info">Info</button>
          <button className="btn btn-outline btn-success">Success</button>
          <button className="btn btn-outline btn-warning">Warning</button>
          <button className="btn btn-outline btn-error">Error</button>



          <div className='mx-24 grid grid-cols-3 gap-8'>

            <div className="card bg-base-100 w-fit shadow-sm">
                    <figure>
                      <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">
                        Card Title
                        <div className="badge badge-secondary">NEW</div>
                      </h2>
                      <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                      <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                      </div>
                    </div>
            </div>
            <div className="card bg-base-100 w-fit shadow-sm">
                    <figure>
                      <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">
                        Card Title
                        <div className="badge badge-secondary">NEW</div>
                      </h2>
                      <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                      <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                      </div>
                    </div>
            </div>
            <div className="card bg-base-100 w-fit shadow-sm">
                    <figure>
                      <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">
                        Card Title
                        <div className="badge badge-secondary">NEW</div>
                      </h2>
                      <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                      <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                      </div>
                    </div>
            </div>
          </div>
              </>

              
  )
}

export default App
