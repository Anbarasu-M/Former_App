

export const DisplayProduct = ()=>{
    return <div>
        <form className="container col-md-4 col-sm-6">
            <div className="form-group">
            <label>Product Name</label>
            <input type="text" className="form-control"/>
            <label>Product Category</label>
            <input type="text" className="form-control"/>
            <label>Product Price</label>
            <input type="text" className="form-control"/>
            <label>Product Description</label>
            <input type="text" className="form-control"/>
            <label>Product Image</label>
            <input type="file" className="form-control"/>
            <br/>
            <div className="text-center">
            <button type="button" className="btn btn-primary btn-xs">Upload</button>
            </div>
            </div>
        </form>
    </div>
}