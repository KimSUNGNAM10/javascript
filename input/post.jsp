<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <%
            String id = request.getParameter("id");
            String pass = request.getParameter("pass");

            out.println("id 값은 : " + id + "<br>");
            out.println("password 값은 : " + pass + "<br>");
        %>
        id 값은 : <%=id %> <br>
        password 값은 : <%=pass%> <br>
    </body>
    </html>