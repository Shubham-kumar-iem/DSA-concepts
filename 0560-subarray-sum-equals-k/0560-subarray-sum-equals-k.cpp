class Solution {
public:
    int subarraySum(vector<int>& nums, int k){
        int sum = 0, ans = 0;
        unordered_map<int,int> mp;
        mp[sum] = 1;
        for(int i = 0; i < nums.size(); i++){
            sum = sum + nums[i];
            if (mp.count(sum - k)){
                ans = ans + mp[sum - k];
            }
            mp[sum]++;
        }
        return ans;
    }
};