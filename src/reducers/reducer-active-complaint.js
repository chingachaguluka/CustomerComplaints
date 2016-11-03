export function activeComplaint (state = null, action) {

    switch(action.type) {
        case 'COMPLAINT_SELECTED':
            return action.payload;
    }
    return state;
}