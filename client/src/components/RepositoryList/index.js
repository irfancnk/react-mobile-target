// PACKAGES
import { useSelector } from 'react-redux';
import styled from 'styled-components';
// MODULES
import LoadingComponent from '../Common/Loaders/LoadingComponent';
import ErrorComponent from '../Common/Loaders/ErrorComponent';
import RepositoryCard from './RepositoryCard';


function RepositoryList() {
    const landingPage = useSelector(state => state.landingPage);

    if (landingPage.loading) {
        return (
            <LoadingComponent />
        )
    }
    if (landingPage.dataList.length === 0) {
        return (
            <ErrorComponent message="No information found for user" />
        );
    }

    let cardList = landingPage.dataList.map((item, index) => {
        return (
            <RepositoryCard key={index} item={item} />
        );
    })
    return (
        <CardWrapper>
            {cardList}
        </CardWrapper>
    );
}

const CardWrapper = styled.div`
    height: 100%;
    overflow-y: scroll; 
    display: grid;
    grid-gap: 15px;
    row-gap: 15px;
    grid-template-rows: auto 1fr;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    justify-items: center;
    margin: 0px;
`;


export default RepositoryList;