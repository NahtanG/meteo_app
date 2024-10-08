import styles from "./page.module.css";

export default function SanFransisco() {
  return (
    <body class="weather-page">
      <div id="root" class="root-container"></div>
      <table class="weather-table">
        <thead>
          <tr>
            <th class="weather-header">Hour</th>
            <th class="weather-header">Temperature (°C)</th>
            <th class="weather-header">Weather</th>
          </tr>
        </thead>
        <tbody id="weather-data" class="weather-data">
          <tr class="weather-row">
            <td class="weather-cell">00:00</td>
            <td class="weather-cell">15</td>
            <td class="weather-cell">Clear</td>
          </tr>
          <tr class="weather-row">
            <td class="weather-cell">01:00</td>
            <td class="weather-cell">14</td>
            <td class="weather-cell">Clear</td>
          </tr>
          <tr class="weather-row">
            <td class="weather-cell">02:00</td>
            <td class="weather-cell">14</td>
            <td class="weather-cell">Clear</td>
          </tr>
          <tr class="weather-row">
            <td class="weather-cell">03:00</td>
            <td class="weather-cell">13</td>
            <td class="weather-cell">Clear</td>
          </tr>
          <tr class="weather-row">
            <td class="weather-cell">04:00</td>
            <td class="weather-cell">13</td>
            <td class="weather-cell">Clear</td>
          </tr>
          <tr class="weather-row">
            <td class="weather-cell">05:00</td>
            <td class="weather-cell">12</td>
            <td class="weather-cell">Clear</td>
          </tr>
          <tr class="weather-row">
            <td class="weather-cell">06:00</td>
            <td class="weather-cell">12</td>
            <td class="weather-cell">Clear</td>
          </tr>
          <tr class="weather-row">
            <td class="weather-cell">07:00</td>
            <td class="weather-cell">13</td>
            <td class="weather-cell">Clear</td>
          </tr>
          <tr class="weather-row">
            <td class="weather-cell">08:00</td>
            <td class="weather-cell">14</td>
            <td class="weather-cell">Clear</td>
          </tr>
          <tr class="weather-row">
            <td class="weather-cell">09:00</td>
            <td class="weather-cell">15</td>
            <td class="weather-cell">Clear</td>
          </tr>
          <tr class="weather-row">
            <td class="weather-cell">10:00</td>
            <td class="weather-cell">16</td>
            <td class="weather-cell">Clear</td>
          </tr>
          <tr class="weather-row">
            <td class="weather-cell">11:00</td>
            <td class="weather-cell">17</td>
            <td class="weather-cell">Clear</td>
          </tr>
          <tr class="weather-row">
            <td class="weather-cell">12:00</td>
            <td class="weather-cell">18</td>
            <td class="weather-cell">Clear</td>
          </tr>
          <tr class="weather-row">
            <td class="weather-cell">13:00</td>
            <td class="weather-cell">19</td>
            <td class="weather-cell">Clear</td>
          </tr>
          <tr class="weather-row">
            <td class="weather-cell">14:00</td>
            <td class="weather-cell">20</td>
            <td class="weather-cell">Clear</td>
          </tr>
          <tr class="weather-row">
            <td class="weather-cell">15:00</td>
            <td class="weather-cell">21</td>
            <td class="weather-cell">Clear</td>
          </tr>
          <tr class="weather-row">
            <td class="weather-cell">16:00</td>
            <td class="weather-cell">22</td>
            <td class="weather-cell">Clear</td>
          </tr>
          <tr class="weather-row">
            <td class="weather-cell">17:00</td>
            <td class="weather-cell">21</td>
            <td class="weather-cell">Clear</td>
          </tr>
          <tr class="weather-row">
            <td class="weather-cell">18:00</td>
            <td class="weather-cell">20</td>
            <td class="weather-cell">Clear</td>
          </tr>
          <tr class="weather-row">
            <td class="weather-cell">19:00</td>
            <td class="weather-cell">19</td>
            <td class="weather-cell">Clear</td>
          </tr>
          <tr class="weather-row">
            <td class="weather-cell">20:00</td>
            <td class="weather-cell">18</td>
            <td class="weather-cell">Clear</td>
          </tr>
          <tr class="weather-row">
            <td class="weather-cell">21:00</td>
            <td class="weather-cell">17</td>
            <td class="weather-cell">Clear</td>
          </tr>
          <tr class="weather-row">
            <td class="weather-cell">22:00</td>
            <td class="weather-cell">16</td>
            <td class="weather-cell">Clear</td>
          </tr>
          <tr class="weather-row">
            <td class="weather-cell">23:00</td>
            <td class="weather-cell">15</td>
            <td class="weather-cell">Clear</td>
          </tr>
        </tbody>
      </table>
    </body>
  );
}
