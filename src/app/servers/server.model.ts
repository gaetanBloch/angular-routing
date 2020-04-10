export class ServerInfo {
  name: string;
  status: string;

  constructor(name: string, status: string) {
    this.name = name;
    this.status = status;
  }
}

export class Server extends ServerInfo {
  id: number;

  constructor(name: string, status: string, id: number) {
    super(name, status);
    this.id = id;
  }
}


