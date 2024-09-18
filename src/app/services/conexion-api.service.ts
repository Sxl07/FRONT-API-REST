import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_LOCAL } from '../config/url.servicios';
import { map } from 'rxjs';
import { Persona } from '../interfaces/persona.interface';

@Injectable({
  providedIn: 'root'
})
export class ConexionAPIService {

  constructor( public http : HttpClient) { }
  getPersonas(): any {
    let url = `${URL_LOCAL}/persona`;

    return this.http.get(url).pipe(
      map((resp:any) => {
        console.log('DATOS', resp);
        return resp.data;
      })
    );
  }

  crud_Personas(unaPersona: Persona, unaAccion: string):any {
    //console.log(unExpediente);

    if (unaAccion === 'eliminar') {
      let parametros2 = new HttpParams();

      let url = `${URL_LOCAL}/persona/${unaPersona.id_persona}`;

      return this.http.delete(url).pipe(
        map((data) => {
          return data;
        })
      );
    }

  
    if (unaAccion === 'insertar') {
      //let parametros2 = new HttpParams();
      let url = URL_LOCAL+ '/persona';

      // Begin assigning parameters
      /*parametros2 = parametros2.append('nombre',unHeroe.nombre);
      parametros2 = parametros2.append('bio',unHeroe.bio);
      parametros2 = parametros2.append('img',unHeroe.img);
      parametros2 = parametros2.append('aparicion',unHeroe.aparicion);
      parametros2 = parametros2.append('casa',unHeroe.casa);
*/
      const body = {
        nombres:unaPersona.nombres,
        apellidos:unaPersona.apellidos,
        fecha_nacimiento:unaPersona.fecha_nacimiento
      };

      return this.http.post(url, body).pipe(map((data) => data));
    }

    if (unaAccion === 'modificar') {
      //let parametros = new HttpParams();

      let url = `${URL_LOCAL}/persona/${unaPersona.id_persona}`;

      //let url = URL_SERVICIOS_MONGODB + '/heroes';

      // Begin assigning parameters
      /*
      parametros = parametros.append('nombre',unHeroe.nombre);
      parametros = parametros.append('bio',unHeroe.bio);
      parametros = parametros.append('img',unHeroe.img);
      parametros = parametros.append('aparicion',unHeroe.aparicion);
      parametros = parametros.append('casa',unHeroe.casa);
        */
      const body = {
        nombres:unaPersona.nombres,
        apellidos:unaPersona.apellidos,
        fecha_nacimiento:unaPersona.fecha_nacimiento
      };

      //console.log(parametros);
      return this.http.put(url, body).pipe(map((data) => data));
    }
  }

  getUnaPersona(unIdPersona:number): any {
    let url = `${URL_LOCAL}/persona/${unIdPersona}`;
    return this.http.get(url).pipe(
      map((resp:any) => {
        console.log('DATOS', resp);
        return resp.data;
      })
    );
  }
}
