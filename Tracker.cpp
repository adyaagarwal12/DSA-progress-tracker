#include "Tracker.h"
#include <fstream>

void Tracker::addProblem()
{
    Problem p;

    cout<<"Enter title: ";
    cin.ignore();
    getline(cin,p.title);

    cout<<"Enter topic: ";
    getline(cin,p.topic);

    cout<<"Enter difficulty: ";
    getline(cin,p.difficulty);

    cout<<"Solved? (1/0): ";
    cin>>p.solved;

    problems.push_back(p);
    saveToFile();
    cout<<"Problem Added Successfully\n";
}

void Tracker::viewProblems()
{
    for(auto p:problems)
    {
        cout<<p.title<<" | "
            <<p.topic<<" | "
            <<p.difficulty<<" | ";

        if(p.solved)
            cout<<"Solved\n";

        else
            cout<<"Pending\n";
    }
}

void Tracker::saveToFile()
{
    ofstream fout("problems.txt");

    for(auto p:problems)
    {
        fout<<p.title<<endl;
        fout<<p.topic<<endl;
        fout<<p.difficulty<<endl;
        fout<<p.solved<<endl;
    }

    fout.close();
}
void Tracker::loadFromFile()
{
    ifstream fin("problems.txt");

    Problem p;

    while(getline(fin,p.title))
    {
        getline(fin,p.topic);
        getline(fin,p.difficulty);

        fin>>p.solved;
        fin.ignore();

        problems.push_back(p);
    }

    fin.close();
}
void Tracker::searchProblem()
{
    string topic;

    cin.ignore();

    cout<<"Enter topic: ";

    getline(cin,topic);

    for(auto p:problems)
    {
        if(p.topic==topic)
        {
            cout<<p.title<<" | "
                <<p.topic<<" | "
                <<p.difficulty<<" | ";

            if(p.solved)
                cout<<"Solved\n";

            else
                cout<<"Pending\n";
        }
    }
}
void Tracker::deleteProblem()
{
    int index;

    viewProblems();

    cout<<"Enter problem number to delete: ";

    cin>>index;

    if(index>=1 && index<=problems.size())
    {
        problems.erase(problems.begin()+index-1);

        saveToFile();

        cout<<"Problem Deleted Successfully\n";
    }

    else
    {
        cout<<"Invalid Index\n";
    }
}
void Tracker::showStats()
{
    int solved=0;
    int pending=0;

    int easy=0;
    int medium=0;
    int hard=0;

    for(auto p:problems)
    {
        if(p.solved)
            solved++;

        else
            pending++;

        if(p.difficulty=="Easy")
            easy++;

        else if(p.difficulty=="Medium")
            medium++;

        else if(p.difficulty=="Hard")
            hard++;
    }

    cout<<"\n====== Statistics ======\n";

    cout<<"Total Problems : "<<problems.size()<<endl;

    cout<<"Solved : "<<solved<<endl;

    cout<<"Pending : "<<pending<<endl;

    cout<<"Easy : "<<easy<<endl;

    cout<<"Medium : "<<medium<<endl;

    cout<<"Hard : "<<hard<<endl;
}