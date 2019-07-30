import { initialState, CompanyState } from './company.state';
import { CompanyActionsTypes, CompanyActions } from './company.actions';

export function companyReducer(state = initialState, action: CompanyActions): CompanyState {
    switch (action.type) {
        case CompanyActionsTypes.LoadSuccess:
            return{
                ...state,
                companies: action.payload,
                error: null                
            };

        case CompanyActionsTypes.LoadFail:
            return{
                ...state,
                companies: [],
                currentCompany: null,
                error: action.payload                
            };
        
        // case CompanyActionsTypes.AddSuccess:
        //     return {
        //         ...state,
        //         companies: [...state.companies, action.payload]
        //     }    

        case CompanyActionsTypes.SetCurrentCompany:
            return{
                ...state,
                currentCompany: action.currentCompany,
                error: null                
            };

        default:
            return state;
    }
}
