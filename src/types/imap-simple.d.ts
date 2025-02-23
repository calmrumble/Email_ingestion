declare module 'imap-simple' {
  interface ImapConfig {
    imap: {
      user: string;
      password: string;
      host: string;
      port: number;
      tls: boolean;
      authTimeout?: number;
    }
  }

  interface ImapConnection {
    connect(config: ImapConfig): Promise<ImapConnection>;
    openBox(boxName: string): Promise<void>;
    search(criteria: string[], options: any): Promise<any[]>;
    getPartData(message: any, part: any): any;
    end(): void;
  }

  function connect(config: ImapConfig): Promise<ImapConnection>;
  function getParts(struct: any): any[];

  const imap: {
    connect: typeof connect;
    getParts: typeof getParts;
  };
  export default imap;
} 