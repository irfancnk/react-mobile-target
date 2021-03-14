import styled from "styled-components";

function RepositoryCard({ item }) {
    let formattedDate = new Date(item.created_at);
    return (
        <Container data-testid="repocard">
            <A href={item.html_url} className="github-card" data-github="Nexmo/nexmo-ruby">
                <h5>{item.name}</h5>
                <p>{item.description}</p>
                <span className="github-card-meta">
                    ● {formattedDate.toISOString().slice(0, 10)}
                </span>
                <span className="github-card-meta">
                    &#9734; {item.stargazers_count}
                </span>
            </A>
        </Container>

    );
}

const Container = styled.div`
    height: 180px;
    overflow-y: auto;
    text-decoration: none;
    background: #fff;
    border-radius: 0.5rem;
    border: 2px solid gray;
    width: 100%;
    padding: 0.2rem;
    &:hover {
        border: 2px solid tomato;
        transition: 0.5s;
        cursor: pointer;
    }
`;


const A = styled.a`
    display: block;
    box-sizing: border-box;
    padding: 20px;
    color: #555;
    text-decoration: none;
    font-size: 13px;
    flex: 1;
    .github-card-meta {
        margin-right: 20px;
    }
`;



export default RepositoryCard;





// {/* <div className="card text-white bg-dark h-100" >
// <div className="card-header" style={{ height: "40px", textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden", display: "inline-block" }}>
//     {item.name}
// </div>
// <div className="card-body" style={{ height: "100px", overflowY: "auto" }}>
//     <h5 className="card-title">Description</h5>
//     <p className="card-text">
//         {item.description}
//     </p>
// </div>
// </div> */}
