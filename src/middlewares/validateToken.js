
export const authRequired = (req, res, next) => {
    const cookies = req.cookies
    console.log(cookies);

    next();
}