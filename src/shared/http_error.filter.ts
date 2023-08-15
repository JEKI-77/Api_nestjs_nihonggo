import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  Logger,
} from '@nestjs/common';

@Catch()
//custom error
export class HttpErrorFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest();
    const response = ctx.getResponse();
    const status = exception.getStatus();

    //error yan ditermima oleh user
    const errorResponse = {
      statusCode: status,
      timestamp: new Date().toLocaleDateString(),
      path: request.url,
      method: request.method,
      message: exception.message || null,
    };
    response.status(404).json({ errorResponse });
    // response.status(404).json({ status: ' data tidak di temukan' });

    //eror yang deplover
    //log aktivitas user ke aplikasi
    Logger.error(
      `${request.method}, ${request.url}`,
      JSON.stringify(errorResponse),
      'ExceptionFilter',
    );
  }
}
