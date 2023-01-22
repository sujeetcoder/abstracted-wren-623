
export const toastHandlerS = (mess,toast,mess2="") => {
    toast({
        title: typeof mess == "string" ? mess : `${mess2} Successeful`,
        description: "success",
        status: 'success',
        duration: 7000,
        isClosable: true,
      })
}

export const toastHandlerF = (mess,toast) => {
  if(mess){
    mess = mess.response.data || mess.message || mess
  }
    toast({
        title: typeof mess == "string" ? mess : 'Something went wrong',
        description: "error",
        status: 'error',
        duration: 7000,
        isClosable: true,
      })
}


export const toastHandlerFire = (mess,toast) => {
  if(mess){
    mess = mess.message
  }
    toast({
        title: typeof mess == "string" ? mess : 'Something went wrong',
        description: "error",
        status: 'error',
        duration: 7000,
        isClosable: true,
      })
}


export const toastHandlerSimple = (mess,toast) => {
  toast({
      title: typeof mess == "string" ? mess : `Successeful`,
      description: "warning",
      status: 'warning',
      duration: 7000,
      isClosable: true,
    })
}