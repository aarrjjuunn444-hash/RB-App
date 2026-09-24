import apiService from "../api/apiService"

// add resume details to JSON server
export const saveResumeAPI = async(resumeDetails)=>{
    return await apiService('POST',"/resumes",resumeDetails)
}

export const viewResumeAPI=async(resumeId)=>{
    return await apiService('GET',`/resumes/${resumeId}`,{})
}
 export const allResumeAPI=async()=>{
    return await apiService('GET',`resumes`,{})
 }

 //download resume:called by view resumecomponent when the resume get displayed 
 export const downloadResumeAPI = async(resumeDetails)=>{
    return await apiService('POST',`downloads`,resumeDetails)

 }

 //get all download resuume api: by calling download resume

 export const  getAllDownloadResumeAPI = async()=>{
    return await apiService('GET',`/downloads`,{})
 }

 // updateResume Api : called by edit component when resume got changes
  export const updateResumeAPI = async(resumeId,resumeDetails)=>{
    return await apiService('PUT',`/resumes/${resumeId}`,resumeDetails)
  }

//deleteAPI:called by all resume component when delete button clicked
export const deleteAPI = async(resumeId,)=>{
    return await apiService('DELETE',`/resumes/${resumeId}`,{})
  }
