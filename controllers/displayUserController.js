import { getUserById } from '../services/getUserFromDB.service'

export default async (req, res) => {
    const user = await getUserById(req.oidc.user.sub)
    console.log(user.friends)
    const data = req.oidc.user
    res.render('profile', { user, data })
}