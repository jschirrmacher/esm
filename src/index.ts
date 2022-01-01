import { compute, octocat } from './module';

(async function () {
  console.log(compute());
  console.log(await octocat());
})();
