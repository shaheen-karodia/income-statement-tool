import "bulma/css/bulma.min.css";

const OutputTable = () => {
  return (
    <table class="table" style={{ width: "100%" }}>
      <thead>
        <tr>
          <th></th>
          <th>Annual</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <th>Service Revenue</th>
          <td>A number</td>
        </tr>
        <tr>
          <th>Product Revenue</th>
          <td>A number</td>
        </tr>
        <tr>
          <th>&nbsp;</th>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <th>Product COGS</th>
          <td>A number</td>
        </tr>
        <tr>
          <th>Patient Acquisition Cost</th>
          <td>A number</td>
        </tr>
        <tr>
          <th>Rent</th>
          <td>A number</td>
        </tr>
        <tr>
          <th>Labor</th>
          <td>A number</td>
        </tr>
        <tr>
          <th>Fixed Overhead</th>
          <td>A number</td>
        </tr>
        <tr>
          <th>Variable Overhead</th>
          <td>A number</td>
        </tr>
        <tr>
          <th>Business Deveopment</th>
          <td>A number</td>
        </tr>
        <tr>
          <th>&nbsp;</th>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <th>Net Operating Profit</th>
          <td>A number</td>
        </tr>
        <tr>
          <th>Tax</th>
          <td>A number</td>
        </tr>
        <tr>
          <th>NPAT</th>
          <td>A number</td>
        </tr>
      </tbody>
    </table>
  );
};

const App = () => {
  return (
    <div classname="main">
      <div class="container">
        <a href="https://bash.com/archive" target="_parent">
          Full archive url
        </a>
        <a href="/archive" target="_parent">
          relative archive url
        </a>
        <h1 class="title is-1">ChiroCalculator</h1>
        <div class="columns is-8 is-variable">
          <h1 class="title is-2">ChiroCalculator</h1>
          <div className="column is-three-fifths">
            <div class="field">
              <label class="label">What is your ZIP Code?</label>
              <div class="control">
                <input class="input" type="text" />
              </div>
            </div>
            <div class="field">
              <label class="label">What is your average Fee per session?</label>
              <div class="control">
                <input class="input" type="text" />
              </div>
            </div>
            <div class="field">
              <label class="label">
                What is the maximum number of sessions you can run per week?
              </label>
              <div class="control">
                <input class="input" type="text" />
              </div>
            </div>
            <div class="field">
              <label class="label">
                How many Chiropractor's do you have working at your Practice?
                (excluding yourself)
              </label>
              <div class="control">
                <input class="input" type="text" />
              </div>
            </div>

            <div class="field">
              <label class="label">Are you actively practicing?</label>
              <div class="control">
                <label class="radio">
                  <input type="radio" name="question" />
                  Yes
                </label>
                <label class="radio">
                  <input type="radio" name="question" />
                  No
                </label>
              </div>
            </div>

            <div class="field">
              <label class="label">What is your monthly rental cost?</label>
              <div class="control">
                <input class="input" type="text" />
              </div>
            </div>
            <div class="field">
              <label class="label">
                How much product/non-session revenue do you generate per month?
              </label>
              <div class="control">
                <input class="input" type="text" />
              </div>
            </div>
          </div>
          <div className="column is-two-fifths">
            <OutputTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
