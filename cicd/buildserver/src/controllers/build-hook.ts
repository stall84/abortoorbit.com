import { NextFunction, Request, Response } from "express";
import { exec } from "node:child_process";


export default function buildHook(req: Request, res: Response, next: NextFunction) {
    console.log('buildHook controller executed...')

    try {
        exec('source ~/aborttoorbit.com/cicd/buildserver/scripts/build-server.sh', { shell: '/bin/bash' }, (obj: any) => console.log('Great Success!', obj))
        return res.status(200).json({
            message: "buildHook request received...",
            reqBody: `${req.body.action}`
        });
    } catch (error) {
        console.error('Womp Womp trying to spawn child process: ', error)
        return res.status(500).json({
            message: "buildHook had a server-side error",
            error: error
        })
    }

}