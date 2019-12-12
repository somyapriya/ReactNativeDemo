const initialState = {
    cognitoUser: null,
    dummyState: [],
    title: '', abstract: '', byline: '', section: '', date: '', url: '', views: ''
};

export const appReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TITLE':
            state.title = action.payload;
            console.log("title reducer")
            return {
                ...state,
            };
        case 'SET_ABSTRACT':
            state.abstract = action.payload;
            return {
                ...state,
            };

        case 'SET_BYLINE':
            state.byline = action.payload;
            return {
                ...state,
            };
        case 'SET_SECTION':
            state.section = action.payload;
            return {
                ...state,
            };
        case 'SET_DATE':
            state.date = action.payload;
            return {
                ...state,
            };
        case 'SET_URL':
            state.url = action.payload;
            return {
                ...state,
            };
        case 'SET_VIEWS':
            state.views = action.payload
            return {
                ...state,
            };
        case 'LOGOUT':
            return {
                ...state,
                title: '',
                abstract: '', byline: '', section: '', date: '', url: '', views: ''
            }
        default:
            console.log('default');
            return state;
    }
};
