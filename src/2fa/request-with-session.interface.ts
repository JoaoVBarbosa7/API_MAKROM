import { Request } from 'express';
//import { Session &  Partial<SessionData>} from 'nestjs-session';
import { SessionData } from './session.interface';

export interface RequestWithSession extends Request {
  session: SessionData;
  
}
