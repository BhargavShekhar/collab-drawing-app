import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
    const token = await getToken({ req: request });
    const url = request.nextUrl
    const pathname = url.pathname;

    const isAuth = !!token;
    const isAuthPage = pathname.startsWith("/signin") || pathname.startsWith("/signup");

    // if(isAuth && isAuthPage) {
    //     return NextResponse.redirect(new URL('/', request.url));
    // }

    if (!isAuth && pathname.startsWith('/canvas')) {
        return NextResponse.redirect(new URL('/signin', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/signin',
        '/signup',
        '/dashboard/:path*',
        '/canvas/:path*'
    ]
}