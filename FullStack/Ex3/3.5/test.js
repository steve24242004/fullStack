"use strict";
class VotingSystem {
    constructor() {
        this.votes = new Map();
    }
    // Method to cast a vote
    castVote(candidate) {
        if (!candidate.trim()) {
            console.log("Invalid vote! Candidate name cannot be empty.");
            return;
        }
        if (this.votes.has(candidate)) {
            this.votes.set(candidate, this.votes.get(candidate) + 1);
        }
        else {
            this.votes.set(candidate, 1);
        }
    }
    // Method to get the winner
    getWinner() {
        if (this.votes.size === 0) {
            console.log("No votes have been cast yet.");
            return;
        }
        let maxVotes = 0;
        let winners = [];
        // Convert Map to an array before iterating (fix for TS2802)
        for (const [candidate, voteCount] of Array.from(this.votes.entries())) {
            if (voteCount > maxVotes) {
                maxVotes = voteCount;
                winners = [candidate];
            }
            else if (voteCount === maxVotes) {
                winners.push(candidate);
            }
        }
        if (winners.length === 1) {
            console.log(`Winner: ${winners[0]} with ${maxVotes} votes.`);
        }
        else {
            console.log(`It's a tie between: ${winners.join(", ")} with ${maxVotes} votes each.`);
        }
    }
    // Method to display election results
    getResults() {
        if (this.votes.size === 0) {
            console.log("No votes have been cast yet.");
            return;
        }
        console.log("Election Results:");
        for (const [candidate, voteCount] of Array.from(this.votes.entries())) {
            console.log(`${candidate}: ${voteCount} votes`);
        }
    }
}
// Example usage:
const election = new VotingSystem();
election.castVote("Alice");
election.castVote("Bob");
election.castVote("Alice");
election.castVote("Charlie");
election.castVote("Bob");
election.castVote("Charlie");
election.castVote("Charlie");
// Display results and winner
election.getResults();
election.getWinner();
