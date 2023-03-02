import { MockMethod as ViteMockMethod } from "vite-plugin-mock";

export interface MockMethod extends ViteMockMethod {
    enable: boolean;
}

export interface MockResult {
    code: number;
    msg: string;
    data: any;
    isMock?: true
}
