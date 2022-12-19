module.exports = middleware => {
    return (req, res, next) => {
        try {
            if(req.user.admin) {
                middleware(req, res, next)
            } else{
                res.status(401).send('Usuário não é administrador.')
            }
        } catch {
            res.status(400).send('Erro inesperado')
        }
        
    }
}