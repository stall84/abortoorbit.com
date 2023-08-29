import { NextFunction, Request, Response } from "express";


export default function testGet(req: Request, res: Response, next: NextFunction) {
    console.log('testGet controller executed...')
    return res.status(200).json({
        message: "testGet success"
    });
}