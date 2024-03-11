import bcrypt from 'bcrypt'

const hashPassword = async (password) => {
    try {
        
     const Password = await bcrypt.hash(password, 10);
     return Password

    } catch (error) {
        
        console.log(error)

    }
}

const matchPassword = async (password, hashPassword) => {
    try {
        
        const comparePassword = await bcrypt.compare(password, hashPassword)
      return comparePassword

    } catch (error) {
        console.log(error)
    }
}




export {
    hashPassword,
    matchPassword
}