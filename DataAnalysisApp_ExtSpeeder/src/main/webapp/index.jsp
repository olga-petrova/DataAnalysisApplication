<%@page import="com.speedment.Speedment"%>
<%@page import="com.speedment.plugin.extspeeder.runtime.servlet.ExtSpeederHttpServlet"%>
<!DOCTYPE html>

<html>
    <head>
        <meta http-equiv="cache-control" content="max-age=0"/>
        <meta http-equiv="cache-control" content="no-cache"/>
        <meta http-equiv="expires" content="0"/>
        <meta http-equiv="expires" content="Tue, 01 Jan 1980 1:00:00 GMT"/>
        <meta http-equiv="pragma" content="no-cache"/>
        <title>Web Application Status</title>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </head>
    <body>
        <h2>REST interface overview</h2>
        <table>
            <tr>
                <th>Database</th>
                <th>Schema</th>
                <th>Table</th>
                <th>Exemplary URI</th>
            </tr>
            <tr>
                <td>test</td>
                <td>test</td>
                <td>houses</td>
                <td>
                    <a href="test/test/test/houses?callback=cb&amp;start=0&amp;limit=10">test/test/test/houses?callback=cb&amp;start=0&amp;limit=10</a>
                </td>
            </tr>
            <tr>
                <td>test</td>
                <td>test</td>
                <td>people</td>
                <td>
                    <a href="test/test/test/people?callback=cb&amp;start=0&amp;limit=10">test/test/test/people?callback=cb&amp;start=0&amp;limit=10</a>
                </td>
            </tr>
        </table>
        <h2>Server Status and Maintenance</h2>
        <%
        final Object speedmentObject = request.getSession().getServletContext().getAttribute(ExtSpeederHttpServlet.SPEEDMENT_ATTRIBUTE_NAME);
        final Object speedmentLoadingObject = request.getSession().getServletContext().getAttribute(ExtSpeederHttpServlet.SPEEDMENT_LOADING_ATTRIBUTE_NAME);
        if (speedmentObject instanceof Speedment) {;
        %>
        Ext Speeder is initialized.
        <br/>
        <br/>
        <form action="<%=request.getContextPath()%>/test/shutdown" target="_blank">
            <input type="submit" value="Shutdown Ext Speeder"/>
            <br/>
        </form>
        <%
        } else if (speedmentLoadingObject instanceof String) {
            out.append("Ext Speeder is currently being initialized.");
        } else {
        %>
        Ext Speeder is not initialized!
        <br/>
        <br/>
        <form action="<%=request.getContextPath()%>/test/init" target="_blank">
            Database username:
            <br/>
            <input type="text" name="username" value="root">
                <br/>
            </input>
            Database password (blank for none):
            <br/>
            <input type="password" name="password" value=""/>
            <br/>
            <input type="submit" value="Initialize Ext Speeder"/>
            <br/>
        </form>
        <%
        }
        %>
    </body>
</html>
