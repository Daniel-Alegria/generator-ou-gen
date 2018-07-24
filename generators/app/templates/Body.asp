<!-- #include virtual="/PartnerNet/Impe/configuration.inc" -->
<!-- #include file="../IMPE_Core.asp" -->

<div class="ou-wrapper">

  <td width="554" bgcolor="#FFFFFF" valign="top">
  <div align="left">
    <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse" bordercolor="#111111" width="554">
      <tr>
        <td colspan="3">&nbsp;</td>
      </tr>
      <tr>
        <td width="20">&nbsp;</td>

        <div class="ou-body">
          <img alt="cover image" src="https://dummyimage.com/554x354/000/fff.gif&text=Safety+Training">

          <div class="ou-title">
            <h1><%= title %> Construction University</h1>
            <h2><%= subTitle %></h2>
          </div>

          <div class="ou-message">
            <p>
            <%= safetyMessage %>
            </p>
          </div>
        <div class="row">
          <!-- <%IF UCASE(Compid)<> "CITY 941022" then%>
            <% If UserNavigationURL = "" Then%>
              <a href="<%=IMPE_HOME%>">
            <% Else %>
              <a href="<%=UserNavigationURL%>">
            <% End If %>
              Register Now
              </a>
          <%END IF%> -->
        </div>
      <tr>
        <td colspan="3">&nbsp;</td>
      </tr>
    </table>
  </div>
  </td>

</div>

<script src='https://unpkg.com/css-vars-ponyfill@1/dist/css-vars-ponyfill.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.7.5/beautify-css.min.js'></script>
<script>
// Toggle commented options to see effects
cssVars({
  // fixNestedCalc: false,
  // onlyVars: true,
  // preserve: true,
  // updateURLs: false,
  // variables: { '--font-family': 'helvetica' },
  // ----------
  onlyLegacy: true
});
</script>
