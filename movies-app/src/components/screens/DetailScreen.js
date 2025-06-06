import DetailContainer from '../containers/DetailContainer';

const DetailScreen = ({ route, navigation }) => {
    const { id, title, type } = route.params;
    // console.log("DetailScreen id:", id);
    return (
        <DetailContainer id={id} title={title} type={type} />
    )
}

export default DetailScreen;