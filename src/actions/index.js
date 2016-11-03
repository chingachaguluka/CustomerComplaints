export function selectComplaint(complaint) {

    return {
        type: 'COMPLAINT_SELECTED',
        payload: complaint
    };
}