
export default{
    error(toast,msg,position="top-right")
    {
    toast.open({
        message: msg,
        type: 'error',
        position:position,
    })
    },


    success(toast,msg,position="top-right")
    {
    toast.open({
        message: msg,
        type: 'success',
        position:position,
    })
    },

    warning(toast,msg,position="top-right")
    {
    toast.open({
        message: msg,
        type: 'warning',
        position:position,
    })
    },

    info(toast,msg,position="top-right")
    {
    toast.open({
        message: msg,
        type: 'info',
        position:position,
    })
    },

    default(toast,msg,position="top-right")
    {
    toast.open({
        message: msg,
        type: 'default',
        position:position,
    })
    }
}

  