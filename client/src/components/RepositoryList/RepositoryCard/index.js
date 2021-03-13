function RepositoryCard({ item }) {
    return (
        <div className="col-6 col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-3 m-0 p-2" style={{ height: "300px" }}>
            <div className="card text-white bg-secondary h-100" >
                <div className="card-header" style={{ height: "50px", textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden", display:"inline-block" }}>
                    {item.name}
                </div>
                <div className="card-body" style={{ height: "250px", overflowY: "auto" }}>
                    <h5 className="card-title">Description</h5>
                    <p className="card-text">
                        {item.description}
                    </p>
                </div>
            </div>
        </div>
    );
}



export default RepositoryCard;

