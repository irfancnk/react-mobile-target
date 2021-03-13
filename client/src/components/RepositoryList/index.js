// PACKAGES
import { useSelector } from 'react-redux';
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
            <ErrorComponent message="No information found for user"/>
        );
    }
    return landingPage.dataList.map((item, index) => {
        return (
            <RepositoryCard key={index} item={item} />
        );
    });
}

export default RepositoryList;