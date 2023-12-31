export default {
    async contactCoach(context, payload) {
        
        const newRequest = {
            userEmail : payload.email,
            message :  payload.message
        };
        const response  = await fetch(`https://vue-finals-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.coachId}.json`, {
            method: 'POST',
            body: JSON.stringify(newRequest)
        });
        const responseData = await response.json()
        if(!response.ok) {
            const error = new Error(responseData.message || 'Failed to set kekw')
            throw error;
        }
        newRequest.id = responseData.name
        newRequest.coachId = payload.coachId
        context.commit('addRequest', newRequest)
    },
    async fetchRequest(context) {
        const coachId = context.rootGetters.userId;
        const response = await fetch(`https://vue-finals-default-rtdb.europe-west1.firebasedatabase.app/requests/${coachId}.json`);
        const responseData = response.json()
        if(!response.ok) {
            const error = new Error(responseData.message || 'Failed to set kekw')
            throw error;
        }
        const requests = [];
        for(const key  in responseData) {
            const request = {
                id: key,
                coachId:coachId,
                userEmail: responseData[key].id,
                message: responseData[key].message
            }
            requests.push(request)
        }
        context.commit('setRequests', requests)
    }
}