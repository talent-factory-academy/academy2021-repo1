import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface ILog {
  start: () => void;
}
export class LogService implements ILog{

  constructor(http: HttpClient, value: number) {
    console.log('log service')
  }

  start() {

  }
}
