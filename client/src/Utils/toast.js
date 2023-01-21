
export const toastHandlerS = (mess,toast) => {
    toast({
        title: typeof mess == String ? mess : 'Successeful',
        description: "",
        status: 'success',
        duration: 7000,
        isClosable: true,
      })
}

export const toastHandlerF = (mess,toast) => {
    mess = mess.response.data || mess.message
    toast({
        title: typeof mess == String ? mess : 'Something went wrong',
        description: "",
        status: 'error',
        duration: 7000,
        isClosable: true,
      })
}