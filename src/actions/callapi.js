const axios = require('axios');
/**
 * @title Call the endpoint to fetch answers for user issues
 * @category Utility
 * @author: asimon
 * @param {any} data - Query value you want to send in payload
 */

/**
 * const incrementNumberOfConversations = async output =>  {
 * const key = bp.kvs.getUserStorageKey(userId, 'numberOfConversations');
 * let value = await bp.kvs.getStorageWithExpiry(botId, key);
 * if (value === undefined) {
 *  value=0;
 * } else {
 *  value++;
 * }
 * await bp.kvs.setStorageWithExpiry(botId, key, value);
 * temp[output] = value;
 * };
 * return incrementNumberOfConversations(args.output); //name should be same as file name
 */

callapi = async () => {
  const userId = event.target; //
  const botId = event.botId;
  //allows us to work with database and other botpress related features

  const endpoint = 'http://10.75.154.106:5004/run_similarity';
  let payload = {
    query: args.data
  };

  try {
    // We call the endpoint
    let response = await axios.post(endpoint, payload);
    user.response = response.data;
    console.log("user id: " + userId + ", botId: " + botId);
  } catch (e) {
    console.log(e);
  } //console.log('Arguments =', util.inspect(args, false, 2, true));
  //console.log(JSON.stringify(args));

}; // Actions are async, so make sure to return a promise


return callapi();
