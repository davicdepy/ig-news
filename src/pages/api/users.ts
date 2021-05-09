import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        { id: 1, name: 'David'},
        { id: 2, name: 'Pamela'},
        { id: 3, name: 'Luis'},
        { id: 4, name: 'Javier'},
    ]

    return response.json(users)
}