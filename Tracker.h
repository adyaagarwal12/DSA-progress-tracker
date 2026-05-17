#ifndef TRACKER_H
#define TRACKER_H

#include<iostream>
#include<vector>
#include "Problem.h"

using namespace std;

class Tracker
{
private:

    vector<Problem> problems;

public:

    void addProblem();
    void viewProblems();

};

#endif