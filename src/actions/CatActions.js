import catApi from '../data/catApi';

const loadCats = () => {
    return (dispatch) => {
        return catApi.getAllCats().then(cats => {
            dispatch(loadCatsSuccess(cats));
        }).catch(error => {
            throw (error);
        });
    }

}

export default loadCats;